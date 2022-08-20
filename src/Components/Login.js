import React from 'react'

export default function Login(props) {
  return (<div>
    <div><div className="row  my-5">
    <div className="col-sm-4  ">
      <div className={`card border-0 bg-${props.mode} `}>
        <div className="card-body1  ">
          <h1 className="card-title text-primary mt-5 ms-4 "><b>facebook</b></h1>
          <h3 className={`card-text text-center text-${props.mode==='light'?'dark':'light'} `}>Facebook helps you connect and share with the people in your life.</h3>
          
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className={`card shadow bg-${props.mode} `}>
        <div className="card-body">
    
        <form>
  <div className="mb-3">

    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address or Phone Number'/>
 
  </div>
  <div className="mb-3">
  
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
  </div>
  
  <div className="d-grid gap-2">
  <button className="btn btn-primary py-2 fs-5" type="button ">Login</button>
 
</div>
</form>
          <p className='my-2 text-center'><a href="?">Forgotten Password?</a></p>
          <hr /><div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-success py-3 fs-6" type="button">Creat New Account</button>

</div>     
        </div>
        
      </div>
      
      
<p className={`my-3 text-center text-${props.mode==='light'?'dark':'light'}`}><b>Create a Page</b> for a celebrity, brand or business.</p>
    </div>
  </div></div></div>
  )
}
