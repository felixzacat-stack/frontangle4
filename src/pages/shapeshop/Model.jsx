import erModelImage from "./img/shop-er-model.svg";

export default function Model() {
  return (
    <div style={{ margin: "30px" }} className="shapeshop-model">
      <h1>Data Model</h1>
      <img className="model-diagram" src={erModelImage} alt="Shape Shop entity-relationship diagram" />
    </div>
  );
}
