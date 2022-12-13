import "./btnNavItem.scss";
export default function ButtonNavItem(props) {
  return (
    <button className="btnNav__itemName">
      <a /* href={`#${props.link}`} */ className="btnNav__itemLink">
        {props.name}
      </a>
    </button>
  );
}
