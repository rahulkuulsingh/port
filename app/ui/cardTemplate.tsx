import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const Card = ({ ...props }) => {
  return (
    <div className="card">
      <div className="image-container">
        {props.image ? <img src={props.image} alt={props.title} /> : null}  {/* Handle image presence */}
      </div>
      <div className="details-container">
        <div className="tags">  {/* Assuming tags are separate from title */}
          {/* Add logic to display tags here (if needed) */}
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.description}</p>
        <div className="project-meta">
          <p className="role">{props.role}</p>
          <p className="years">{props.years}</p>
          <p className="team">{props.team}</p>
        </div>
        <div className="growth-metrics">
          {props.metrics.map((metric: { value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; valueProp: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
            <div key={index} className="metric-item">
              <p className="value">{metric.value}</p>
              <p className="value-prop">{metric.valueProp}</p>
              <span className="icon">{metric.icon}</span>  {/* Assuming icon is a string */}
              <p className="text">{metric.text}</p>
            </div>
          ))}
        </div>
        {/* Add Button component here if needed */}
      </div>
    </div>
  );
};

export default Card;
