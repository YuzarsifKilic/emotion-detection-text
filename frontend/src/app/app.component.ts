import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PredictService} from "./predict.service";
import Swal from "sweetalert2";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PredictService]
})
export class AppComponent {
  title = 'project';
  firstPredict!: string;
  firstPredictValue!: number;
  secondPredict!: string;
  secondPredictValue!: number;
  firstPrediction = ""
  secondPrediction = ""

  constructor(private formBuilder: FormBuilder, private predictService: PredictService) { }

  signInForm: FormGroup = this.formBuilder.group({
    emotion: ['', [Validators.required, Validators.minLength(3)]]
  })

  predict() {
    if (this.signInForm.valid && this.signInForm.value.emotion.includes(" ")) {
      this.predictService.tahminEt(this.signInForm.value.emotion)
        .subscribe(predict => {
          let anahtarlar = Object.keys(predict);
          let degerler = Object.values(predict).map(value => {
            if (typeof value === 'number') {
              return value;
            } else {
              console.error('Beklenmeyen değer: ', value);
              return NaN;
            }
          });

          if (degerler[0] < degerler[1]) {
            this.firstPredict = anahtarlar[1];
            this.secondPredict = anahtarlar[0];
            this.firstPredictValue = degerler[1];
            this.secondPredictValue = degerler[0];
            if (this.firstPredict == "excitement") {
              this.firstPrediction = "Heyecanlı";
            } else if (this.firstPredict == "joy") {
              this.firstPrediction = "Eğlenceli";
            } else if (this.firstPredict == "jealous") {
              this.firstPrediction = "Kıskanç";
            } else if (this.firstPredict == "Happy") {
              this.firstPrediction = "Mutlu";
            } else if (this.firstPredict == "Sadness") {
              this.firstPrediction = "Üzgün";
            } else if (this.firstPredict == "Anger") {
              this.firstPrediction = "Kızgın";
            } else if (this.firstPredict == "Fear") {
              this.firstPrediction = "Korkmuş";
            } else if (this.firstPredict == "Surprise") {
              this.firstPrediction = "Şaşkın";
            } else if (this.firstPredict == "disappointment") {
              this.firstPrediction = "Hayal Kırıklığı";
            }
            if (this.secondPredict == "excitement") {
              this.secondPrediction = "Heyecanlı";
            } else if (this.secondPredict == "joy") {
              this.secondPrediction = "Eğlenceli";
            } else if (this.secondPredict == "jealous") {
              this.secondPrediction = "Kıskanç";
            } else if (this.secondPredict == "Happy") {
              this.secondPrediction = "Mutlu";
            } else if (this.secondPredict == "Sadness") {
              this.secondPrediction = "Üzgün";
            } else if (this.secondPredict == "Anger") {
              this.secondPrediction = "Kızgın";
            } else if (this.secondPredict == "Fear") {
              this.secondPrediction = "Korkmuş";
            } else if (this.secondPredict == "Surprise") {
              this.secondPrediction = "Şaşkın";
            } else if (this.secondPredict == "disappointment") {
              this.secondPrediction = "Hayal Kırıklığı";
            }
          } else {
            this.firstPredict = anahtarlar[0];
            this.secondPredict = anahtarlar[1];
            this.firstPredictValue = degerler[0];
            this.secondPredictValue = degerler[1];
            if (this.firstPredict == "excitement") {
              this.firstPrediction = "Heyecanlı";
            } else if (this.firstPredict == "joy") {
              this.firstPrediction = "Eğlenceli";
            } else if (this.firstPredict == "jealous") {
              this.firstPrediction = "Kıskanç";
            } else if (this.firstPredict == "Happy") {
              this.firstPrediction = "Mutlu";
            } else if (this.firstPredict == "Sadness") {
              this.firstPrediction = "Üzgün";
            } else if (this.firstPredict == "Anger") {
              this.firstPrediction = "Kızgın";
            } else if (this.firstPredict == "Fear") {
              this.firstPrediction = "Korkmuş";
            } else if (this.firstPredict == "Surprise") {
              this.firstPrediction = "Şaşkın";
            } else if (this.firstPredict == "disappointment") {
              this.firstPrediction = "Hayal Kırıklığı";
            }
            if (this.secondPredict == "excitement") {
              this.secondPrediction = "Heyecanlı";
            } else if (this.secondPredict == "joy") {
              this.secondPrediction = "Eğlenceli";
            } else if (this.secondPredict == "jealous") {
              this.secondPrediction = "Kıskanç";
            } else if (this.secondPredict == "Happy") {
              this.secondPrediction = "Mutlu";
            } else if (this.secondPredict == "Sadness") {
              this.secondPrediction = "Üzgün";
            } else if (this.secondPredict == "Anger") {
              this.secondPrediction = "Kızgın";
            } else if (this.secondPredict == "Fear") {
              this.secondPrediction = "Korkmuş";
            } else if (this.secondPredict == "Surprise") {
              this.secondPrediction = "Şaşkın";
            } else if (this.secondPredict == "disappointment") {
              this.secondPrediction = "Hayal Kırıklığı";
            }
          }
        })
    } else {
      this.errorAlert();
    }
  }

  errorAlert() {
    Swal.fire({
      title: "Hata",
      html: "Lütfen bir cümle girin",
      icon: 'error',
    });
  }


}
