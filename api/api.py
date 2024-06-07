from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import LabelEncoder
from keras.models import load_model

app = Flask(__name__)
CORS(app)

yuklenen_model = load_model('duygu_tahmin_modeli.h5')
data = pd.read_csv('etiketli_veri.csv')
texts = data['text']
labels = data['emotion']
vectorizer = CountVectorizer(max_features=1000)
X = vectorizer.fit_transform(texts).toarray()
encoder = LabelEncoder()
y = encoder.fit_transform(labels)

@app.route('/tahmin', methods=['POST'])
def tahmin_et():
    metin = request.json['metin']
    metin_vektoru = vectorizer.transform([metin]).toarray()
    tahmin_olasiliklari = yuklenen_model.predict(metin_vektoru)
    tahminler = {encoder.inverse_transform([i])[0]: float(prob) for i, prob in enumerate(tahmin_olasiliklari[0])}
    en_yuksek_iki_tahmin = sorted(tahminler, key=tahminler.get, reverse=True)[:2]
    return jsonify({key: tahminler[key] for key in en_yuksek_iki_tahmin})

if __name__ == '__main__':
    app.run(debug=True)
