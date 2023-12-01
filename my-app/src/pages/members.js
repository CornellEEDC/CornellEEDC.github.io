import basic from "./basic.png"

function MemberIcon() {
  return (
    <div className="column">
        <h3>
            Jillian Parrino
        </h3>
        <aside>
            <div className="parent">
                <img className= "child" src ={basic} style={{width:"75%", border:"5px double rgb(255, 0, 0)"}} ></img>
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

        
        <div style={{backgroundColor: "red"}}>
          <br></br>
          <br></br>
          <h1 className="Members-h1">
              <b>
                  Meet The Peeps
                  
              </b>
          </h1>
          <br></br>
        </div>
        <br></br>

        <h2 className="Members-h2">
            E-Board
        </h2>
        <h3>
        Those who make the magic happen...
        </h3>

        <div className="row">
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
        </div>
        <br></br>

        <h2 className="Members-h2">
            Engineering
        </h2>

        <h3>
        Mechanical
        </h3>

        <div className="row">
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
        </div>
        <br></br>

        <h3>
        Software
        </h3>

        <div className="row">
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
          <MemberIcon />
        </div>
        <br></br>

        <h2 className="Members-h2">
            Production
        </h2>

        <h3>
        Our lovely Production team
        </h3>

        <div className="row">
          <MemberIcon />
          <MemberIcon />
        </div>
        <br></br>

        <h2 className="Members-h2">
            Business
        </h2>

        <h3>
        The business team is responsible for organising our Events and communicating with sponsors...
        </h3>

        <div className="row">
          <MemberIcon />
          <MemberIcon />
        </div>
        <br></br>


      </div>


  );
}

export default Members;