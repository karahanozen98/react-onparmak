import React from "react";
import keyboardImage from "../../static/images/q-10.png";
import Exercise from "../Exercise/Exercise";
import { Button } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-row">
        <div className="home-col-1">
          <h1>ON PARMAK EĞİTİM VE UYGULAMALARI</h1>
          <h2>On Parmak Nedir?</h2>
          <p>
            10 parmak klavyeye bakmadan yazma becerisidir. Hızlı yazmayı
            gerektirmese de on parmak yazanlar genelde en hızlı ve hatasız yazan
            kişilerdir. 10 Parmak yazan kişi gözleri kapalı dahi olsa yazarken
            hata yaptığını anlar ve hiç düşünmeden geri silme tuşuna basarak
            hatasını düzeltebilmektedir
          </p>
          <p>
            Aynı zamanda on parmak kullanmak psikomotor (bedensel ya da
            devinişsel) bir davranış olduğu için yolda yürürken bir konuyu
            düşünmek ve on parmak yazarken bir konuyu düşünmek arasında bir
            psikomotor eylemin ve bir bilişsel işlemin paralel yürütülmesi gibi
            bir benzerlik vardır.
          </p>
          <p>
            Ancak klavyedeki harflere bakarken bir konuyu düşünmeye çalışmak bu
            durumdan farklıdır ve zordur çünkü; klavyedeki harflerin yerini
            hafızadan hatırlayıp o bölgedeki harfe basmak zaten zihni meşgul
            edici bir bilişsel eylemdir. Dolayısı ile bakarak yazan kişinin
            ikinci bir bilişsel işlemi paralel yürütmesi verimli olmadığı gibi
            bir matematik problemi ve bir de kimya problemini aynı anda çözme
            girişimine benzetilebilir.
          </p>
          <p>
            Kaynak:{" "}
            <a href="https://tr.wikipedia.org/wiki/On_parmak">Vikipedi</a>
          </p>
        </div>
        <div className="home-col-2">
          <img alt="ornekresim" src={keyboardImage}></img>
          <p>10 Parmak kullanımına yönelik örnek klavye tutuşu</p>
        </div>
      </div>
      <h2>10 Parmak Egzersizleri</h2>
      <h6>
        Mevcut klavye düzeninize ait olan her egzerisizi sırasıyla tamamlayın.
        Egzersizleri <strong>60 saniyeden kısa süre içinde en fazla 3 hata ile </strong>
        bitirirseniz sonraki egzerisize geçmeniz önerilir.
      </h6>
      <div className="home-row-2">
        <div className="home-exercises">
          <h5>QWERTY-Klavye</h5>
          <ul className="home-exercises-ul">
            <li>
              <Button> Egzersiz-1</Button> Sol el 'a' 's' 'd' 'f' ve boşluk
              karakterileri.
            </li>
            <li>
              <Button> Egzersiz-2</Button> Sağ el 'j' 'k' 'l' 'ş' 'i' ve boşluk
              karakterileri.
            </li>
            <li>
              <Button> Egzersiz-3</Button>
            </li>
            <li>
              <Button> Egzersiz-4</Button>
            </li>
          </ul>
        </div>
        <div className="home-exercises">
          <h5>F-Klavye</h5>
        </div>
      </div>
      <Exercise></Exercise>
    </div>
  );
}

export default Home;
