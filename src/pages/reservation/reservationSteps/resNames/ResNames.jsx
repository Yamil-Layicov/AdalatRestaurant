import { FormWrapper } from "../formWrapper/FormWrapper";
import './resNames.scss'

export function ResNames({ updateFields, activeResName, setActiveResName }) {

  const restNames = [
    { id: 1, value: "Hill Badamdar" },
    { id: 2, value: "Hill Amburan" },
  ];

  const handleTitle = (item) => {
    updateFields({ resName: item.value });
    setActiveResName(item.id);
  }

  return (
    <FormWrapper title="Restoran seçin">
      <div className="resNamesContent">
        {restNames.map((item) => (
          <div  
            key={item.id}
            className={`${activeResName === item.id && "activeResName"} restoranName`}
            onClick={() => handleTitle(item)}
          >
            {item.value}
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}