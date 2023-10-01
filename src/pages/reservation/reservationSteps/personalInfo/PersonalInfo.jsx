import { FormWrapper } from "../formWrapper/FormWrapper";
import "./personalInfo.scss";

const FinishInputs = ({ updateFields, fullName, email, phone, note }) => {
  return (
    <div>
      <FormWrapper title="Şəxsi məlumatlarınızı doldurun">
        <div className="personalInfo">
          <div className="personalBox">
            <label htmlFor="">Ad Soyad</label>
            <input
              type="text"
              onChange={(e) => updateFields({ fullName: e.target.value })}
            />
          </div>
          <div>
            <div className="phoneAndEmail">
              <div className="personalBox">
                <label htmlFor="">Tel: nomresi</label>
                <input
                  type="number"
                  onChange={(e) => updateFields({ phone: e.target.value })}
                />
              </div>
              <div className="personalBox">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  onChange={(e) => updateFields({ email: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="personalBox">
            <label htmlFor="">Qeyd</label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="3"
              onChange={(e) => updateFields({ note: e.target.value })}
            ></textarea>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default FinishInputs;
