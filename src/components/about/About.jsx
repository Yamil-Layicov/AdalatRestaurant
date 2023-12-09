import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
      </div>
      <div className="right">
        <h1>Haqqımızda</h1>
        <p>
          Şəhərin mərkəzində yerləşən restoranımız 2018-cı ildən fəaliyyət
          göstərir. Milli mətbəximizin ləzzətli təamlarından dadaraq, ailə və
          dostlarınızla xoş vaxtı bizimlə keçirə bilərsiniz. Şeflərimizin xüsusi
          və sizə özəl olaraq hazırladığı yeməklərin dadını bir daha
          unutmayacaqsınız. <br /> <br /> Həm dostlarla əylənəcəyiniz, həm də aillənizlə xoş
          vaxt keçirəcəyiniz kabinetlərimiz xüsusi dizaynı ilə seçilir. Axşamlar
          ifa olunan canlı musiqi isə ruhunuzun dincəlməsi üçün möhtəşəm bir
          imkandır.
        </p>
      </div>
    </div>
  );
};

export default About;
