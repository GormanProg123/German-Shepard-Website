import "./styles/Text.css";

interface TextFieldProps {
  title: string;
  subtitle: string;
}

export function TextField({ title, subtitle }: TextFieldProps) {
  return (
    <div className="new-container">
      <div className="new-content">
        <h1 className="new-title">{title}</h1>
        <p className="new-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
