
const Alert = ({color, messagge}) => {
  
  return (
        <>
          <div>
            <span className={" miAlerta badge bg-"+color+" my-3 p-2 "}>{messagge}
            </span>
          </div>
        </>
      )
  
};

export default Alert;