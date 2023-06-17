
import React, { Fragment, useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';

function Projectform() {

  const [statevariable, statfunction] = useState("");
  const myfunc = () => {
    statfunction("pankaj");
  }
  const [myvar, myfun] = useState("");
  const Myinputchan = (p) => {
    myfun(p.target.value);
    console.log(p);
  }

  useEffect(() => {
    console.log("hi");
  })

  const [mycol, mycolfun] = useState("red")
  const mycolor = (u) => {
    mycolfun(u.target.value);
  }

  const { register, handleSubmit} = useForm();
  const mydata = data => console.log(data);

  return (
    <Fragment>
      <input type="text" value={myvar} onInput={Myinputchan} />
      <p style={{ backgroundColor: `${mycol}` }}>this is paragraph: {statevariable} {myvar}</p>
      <button type='button' onClick={myfunc}>change state value</button>
      <input type='color' onInput={mycolor} />
      <hr style={{ backgroundColor: `${mycol}` }} size="10" />
      <form onSubmit={handleSubmit(mydata)}>

        <div className='container shadow p-4 bg-light'>
          <div className='row'>
            <div className='col-md-6'>
              <label class="form-label">Name</label>
              <input type="text" class="form-control" {...register("myname")} />
              <div class="form-text text-danger">We'll never</div>
            </div>
            <div className='col-md-6'>
              <label class="form-label">Email</label>
              <input type="email" class="form-control" />
              <div class="form-text text-danger">We'll never</div>
            </div>
            <div className='col-md-6'>
              <label class="form-label">Phone</label>
              <input type="text" class="form-control" />
              <div class="form-text text-danger">We'll never</div>
            </div>
            <div className='col-md-6'>
              <label class="form-label">Address</label>
              <input type="text" class="form-control" />
              <div class="form-text text-danger">We'll never</div>
            </div>
          </div>
          <div className='col-md-12 text-center pt-5'>
             <button type='submit' class="btn btn-success"> submit</button>
            </div>
        </div>


      </form>


    </Fragment>
  )
}

export default Projectform