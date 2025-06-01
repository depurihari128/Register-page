
import './App.css';

function App() {
  return (
    <div className='body'>
    {/* <video autoPlay
        loop
        muted
        playsInline
        className="bg-video"
        src="https://media.gettyimages.com/id/1212064610/video/buffalo-cow-and-bull-walk-cycle-
        animation.mp4?s=mp4-640x640-gi&k=20&c=_kZmEOxMvpeXvSCJgDhH5jIox_dkp62wHE3X8C3f2P4="/> */}
    <div className='content'>
      <div>
        <h2>Register</h2>
      </div>
      
      <div className="group">
          <label htmlFor="name">Enter Name</label>
          <input type='text' id="name" placeholder='Enter your name' />
        </div>
      
      <div className="group">
          <label htmlFor="name">Email id</label>
          <input type='text' id="name" placeholder='Email' />
        </div>
      <div className="group">
          <label htmlFor="name">Password</label>
          <input type='text' id="name" placeholder='Password' />
        </div>
      <div className="group">
          <label htmlFor="name">Re-password</label>
          <input type='text' id="name" placeholder='Repassword' />
        </div>
        <button className='button '>Button</button>
    </div>
    </div>
);
}

export default App;
