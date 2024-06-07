import pandas as pd
from keras.models import Sequential
from keras.layers import Dense, Embedding
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from keras.models import load_model

df = pd.read_csv('etiketli_veri.csv')

print("Sütun isimleri:", df.columns.tolist())

unique_values = df['emotion'].unique()

print("Duygular:", unique_values)


unique_values = df['emotion'].unique()

print("Duygular:", unique_values)

value_counts = df['emotion'].value_counts()

print(value_counts)

data = pd.read_csv('etiketli_veri.csv')

texts = data['text']
labels = data['emotion']

vectorizer = CountVectorizer(max_features=1000)
X = vectorizer.fit_transform(texts).toarray()

encoder = LabelEncoder()
y = encoder.fit_transform(labels)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = Sequential()
model.add(Dense(1024, input_shape=(1000,), activation='relu'))
model.add(Dense(256, activation='relu'))
model.add(Dense(9, activation='softmax'))

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model.fit(X_train, y_train, epochs=100, batch_size=32, validation_data=(X_test, y_test), verbose=2)

y_pred_probs = model.predict(X_test)

model.save('duygu_tahmin_modeli3.h5')


