import keyboardImage from "../../static/images/q-10.png";

const HomeWrapper = () => {
    return(
        <div className="home-row">
        <section id="onparmak" className="home-col-1">
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
              Kaynak:
              <a href="https://tr.wikipedia.org/wiki/On_parmak">Vikipedi</a>
            </p>
          </section>
          <div className="home-col-2">
            <img alt="ornekresim" src={keyboardImage}></img>
            <p>10 Parmak kullanımına yönelik örnek klavye tutuşu</p>
          </div>
        </div>
    )
}
export default HomeWrapper