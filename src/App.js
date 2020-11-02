import ukulele from './ukulele draw.jpeg';
import imgukulele from './ukulel .jpg';
import img2ukulele from './ukulele2.jpg';
import './App.css';


const styles = {
  text: {
    textAlign: "center"
  },
  logoimage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "10%"
  },
  imgstyle: {
    width: "200px", height: "200px"
  },

  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  ukulele: {
    margin: "20px"
  }

};

function App() {

  return (
    <div>
      <div>
        <h1 style={styles.text}>strum</h1>
        <h4 style={styles.text} >The ukulele hunt</h4>
        <img src style={styles.logoimage}
          src={ukulele} />
      </div >
      <div style={styles.list}>
        <div style={styles.ukulele}>
          <img style={styles.imgstyle}
            src={imgukulele} />
          <p style={styles.text}> ukulele red strap </p>
          <p style={styles.text}>50 kD</p>
        </div>
        <div>
          <img style={styles.imgstyle}
            src={img2ukulele} />
          <p style={styles.text}> ukulele green strap </p>
          <p style={styles.text}>60 kD</p>
        </div>
      </div>
    </div>


  );

}



export default App;
