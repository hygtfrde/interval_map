import React, { useState, useEffect } from 'react'; 
import './IntervalMapContainer.css';
import BinaryTree from './BinaryTree/BinaryTree';

const IntervalMapContainer = () => {
  // state variables 
  const [k1, setK1] = useState(null);
  const [k2, setK2] = useState(null);
  const [v, setV] = useState(null);
  const [kX, setKX] = useState(null);
  const [binTree, setBinTree] = useState(); 
  const [output, setOutput] = useState(null); 

  // handle initialization 
  useEffect( ()=>{
    let newTree = new BinaryTree(); 
    setBinTree(newTree);
    console.log('created binary tree after initial render'); 
  },[])

  //------------------------------------------------
  //------------ Handle Input Changes --------------
  //------------------------------------------------
  const handleK1Change = (e) => {
    let k1Value = e.target.value; 
    // console.log('k1Value ',k1Value);
    setK1(k1Value); 
  }
  const handleK2Change = (e) => {
    let k2Value = e.target.value; 
    // console.log('k2Value ',k2Value);
    setK2(k2Value);
  }
  const handleVChange = (e) => {
    let vValue = e.target.value; 
    // console.log('vValue ',vValue);
    setV(vValue); 
  }
  const handleKXChange = (e) => {
    let kXValue = e.target.value; 
    // console.log('kXValue ',kXValue);
    setKX(kXValue); 
  }
  //------------------------------------------------

  //-------------------------------------------------
  //------------ Handle Form Submissions ------------
  //-------------------------------------------------
  const handleInsertionSubmit = (e) => {
    e.preventDefault();
    // if values not null 
    console.log('k1: ', k1);
    console.log('k2: ', k2);
    // error check correct intervals [ k1, k2 )
    if(k1>=k2){
      alert('k1 must be lower than k2'); 
      setK1(null);
      setK2(null); 
    }
    console.log('v: ', v);
    binTree.insert(k1, k2, v); 
    console.log('Binary Tree => ', binTree); 
  }
  const handleRetrievalSubmit = (e) => {
    e.preventDefault();
    let retrieval = binTree.retrieve(kX);
    console.log('setting output ', retrieval); 
    setOutput(retrieval); 
    console.log('output ', output)
  }
  //------------------------------------------------

  // let tree = new BinaryTree(); 
  // tree.insert(9,12,'A');
  // tree.insert(4,6,'B');tree.insert(2,3,'F');tree.insert(7,9,'C');tree.insert(12,13,'D');
  // // tree.insert(10,11,'E')
  // console.log('TREE: ', tree)
  // tree.retrieve(3)


  return (
    <div className="App">
      <header>
        <h1>Interval Map Container</h1>
        <h5>by Harold Ulrich</h5>
      </header>

      <div className='user_interface'>
        <h3>Insertion</h3>
        <form onSubmit={handleInsertionSubmit}>
          <input onChange={handleK1Change} placeholder='K_1: lower bound'/> <br></br>
          <input onChange={handleK2Change} placeholder='K_2: upper bound'/> <br></br>
          <input onChange={handleVChange} placeholder='V: value'/> <br></br>
          <button type='submit'>Submit</button>
        </form>
      </div> 

      <div className='user_interface'>
        <h3>Retrieval</h3>
        <form onSubmit={handleRetrievalSubmit}>
          <input onChange={handleKXChange} placeholder='K_x: retrieve value'/> <br></br>
          <button type='submit'>Submit</button>
        </form>
      </div> 

      <div>
        <h3>Map To Value</h3>
        {output ? output : null}
      </div>

      

    </div>
  );
}

export default IntervalMapContainer;
