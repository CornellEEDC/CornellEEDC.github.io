import jillian from "./JILLIANPARRINO.jpg"

// Helper Functions
function Header() {
  return (
    <title>
    CEEDC Meet the Peeps
    </title>
  )
}

function MemberIcon() {
  return (
    <div className="column">
        <h3>
            Jillian Parrino
        </h3>
        <aside>
            <div className="parent">
                <img className= "child" src ={jillian} style={{width:"75%", border:"5px double rgb(255, 0, 0)"}} ></img>
                <b>
                    <p className="child">President, Engineering Lead, Production Lead & Founding Member</p> 
                </b> 
            </div>
        </aside>
    </div>
  );
}

// Page
function Members() {
  return (
      <div className="Main">
        <p>pens</p>
        <div className="row">
          <MemberIcon />
          <MemberIcon />
        </div>
        <div className="row">
          <MemberIcon />
          <MemberIcon />
        </div>
      </div>
  );
}

export default Members;