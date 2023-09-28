import { FormWrapper } from "./FormWrapper";
import './TitleForm.scss'

export function ChooseResName({ updateFields, activeResName, setActiveResName }) {

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
      <div style={{ display: "flex", gap: "2rem" }}>
        {restNames.map((item) => (
          <div  
            key={item.id}
            style={{ border: "1px solid gray", padding: "32px 12px" }}
            className={`${activeResName === item.id && "activeResName"}`}
            onClick={() => handleTitle(item)}
          >
            {item.value}
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}
