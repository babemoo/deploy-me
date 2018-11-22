import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Tabs} from 'antd';
import axios from "axios";
import { Row, Col } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import {Table} from 'antd';
import {GoogleApiWrapper} from 'google-maps-react';
const TabPane = Tabs.TabPane;
var vehicle=100,vehicle2=70,urls,switch1=2;
const {  Content } = Layout;

function switch_Changed(value){
  switch1=value
  console.log('switch:',switch1)
}
function vehicle_Changed(value){
  vehicle=value
  console.log('vehicle:',vehicle)
}
function vehicle_Changed2(value){
  vehicle2=value
  console.log('vehicle:',vehicle2)
}

class Core extends Component {
  state = {
    collapsed: false,
  };
  constructor(props){
    super(props);
    this.state = {
      carID : [],
      AAA: [],
      carID1 : [],
      carID2 : [],
      carID3 : [],
      carID4 : [],
      carID5 : [],
      carID6 : []};
  }
  componentDidMount(){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/1'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(urls+"Hioooooo")
      {this.setState({carID1:res.data})}
      console.log(switch1)
    });

    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/2'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID2:res.data})}
      console.log(switch1)   
    });

    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/3'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID3:res.data})}
      console.log(switch1)
    });

    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/4'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID4:res.data})}
      console.log(switch1)
    });

    urls=process.env.REACT_APP_API_URL+'/ORTOOLS/'+vehicle+'/5'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID5:res.data})}
      console.log(switch1)
    });

    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/6'
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(urls+"Hisix")
      {this.setState({carID6:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar1(vehicle){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID1:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar2(vehicle){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID2:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar3(vehicle){
    urls='http://localhost:5000/ORTOOLS/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID3:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar4(vehicle){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID4:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar5(vehicle){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID5:res.data})}
      console.log(switch1)
    });
  }

  WhenClickBigCar6(vehicle){
    urls='http://localhost:5000/ORTOOLS/'+vehicle+'/'+switch1
    axios({
      method:'get',
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: urls,
    }).then(res=>{
      console.log(res+"Hi")
      {this.setState({carID6:res.data})}
      console.log(switch1)
    });
  }

WhenClickSmallCar1(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID1:res.data})}});
}

WhenClickSmallCar2(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID2:res.data})}});
}

WhenClickSmallCar3(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID3:res.data})}});
}

WhenClickSmallCar4(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID4:res.data})}});
}

WhenClickSmallCar5(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID5:res.data})}});
}

WhenClickSmallCar6(vehicle2){
  urls='http://localhost:5000/ORTOOLS/'+vehicle2+'/'+switch1
  axios({
    method:'get',
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    url: urls,
  }).then(res=>{{this.setState({carID6:res.data})}});
}

onCollapse = (collapsed) => {
  console.log(collapsed);
  this.setState({ collapsed });
}

render()  {
  const columns = [
    {
      width: 80,
      // title: 'คันที่',
      dataIndex: 'carID',
      key: 'carID',
      render: text => <h3 style={{textAlign: 'center'}}>{text}</h3>,
    }, {
      width: 800,
      // title: 'เส้นทาง',
      dataIndex: 'path',
      key: 'path',
      render: text => <h4>{text}</h4> ,
    }, {
      width: 230,
      // title: 'volume ของแต่ละ drop',
      dataIndex: 'eachvolume',
      key: 'eachvolume',
      render: text => <h4 style={{textAlign: 'right'}}>{text}</h4>,
    }, {
      width: 200,
      // title: 'total volume',
      dataIndex: 'load',
      key: 1,
      render: text => <h4 style={{textAlign: 'right'}}>{text}</h4>,
    }, {
      width: 220,
      // title: 'drop',
      dataIndex: 'drop',
      key: 'drop',
      render: text => <h4 style={{textAlign: 'right'}}>{text}   ดรอป</h4>,
    }, {
      width: 200,
      // title: 'น้ำหนัก',
      dataIndex: 'weight',
      key: 'weight',
      render: text => <h4 style={{textAlign: 'right'}}>{text}    ตัน</h4>,
    }, {
      width: 250,
      // title: 'แต่ละอำเภอ',
      dataIndex: 'eachamp',
      key: 'eachamp',
      render: text => <h4 style={{textAlign: 'right'}}>{text}</h4>,
    }, {
      width: 250,
      // title: 'อำเภอปลายทาง',
      dataIndex: 'ampthai',
      key: 'ampthai',
      render: text => <h4 style={{textAlign: 'right'}}>{text}</h4>,
    }
  ];

  return (
    <Tabs  defaultActiveKey="2" size="large" onChange={switch_Changed} >
      <TabPane  tab={<span style={{marginLeft: 100 ,  fontSize: '22px' }}   >1B : นครหลวง </span> } key="1"   >
        <Layout>
          <div >
            <div style={{ 'white-space':'pre-line'}}>
              <Content style={{backgroundColor: '#FFFFFF' }}>
                <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
                  <Col span={7}>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <img style={{height : 200  , float: "center" }} src ="/image/1B.png" alt ="" /></Col>
                  <Col span={5}>
                    <Row  style={{ marginTop: 50 }} >
                      volume ของรถใหญ่
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      <InputNumber  
                        style={{ fontSize: '20px', marginTop: 10 }}     
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      %
                    </Row>
                    <Row >
                      volume ของรถเล็ก
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      <InputNumber  
                        style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      %
                    </Row>
                  </Col>
                  <Col span={5}>
                    <Row style={{ marginTop: 50 }}>
                      <Button 
                        style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                        type='primary'
                        size='large'
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar1(vehicle,switch1=1)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                      </Button>
                    </Row>
                    <Row>
                      <Button 
                        type='primary'
                        size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar1(vehicle2,switch1=1)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                      </Button>
                    </Row>
                  </Col>
                  <Col span={7}>
                  <Carousel autoplay>
                  <div>
                  <img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe.png" alt ="" />
                  </div>
                  <div>
                  <img style={{height : 230 , float: "right" , paddingRight: '150px', paddingBottom: '20px' }} src ="/image/pipe11.png" alt ="" />
                  </div>
                  <div>
                  <img style={{height : 230 , float: "right" , paddingRight: '200px', paddingBottom: '20px' }} src ="/image/pipe12.png" alt ="" />
                  </div>
                  </Carousel>
                  </Col>
                </Row>
              </Content>
              <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
                <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
                  <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    คันที่
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
                    เส้นทาง
              
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    volume รถแต่ละคัน
                  
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    volume
                
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                    จุด
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    
                    น้ำหนัก
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    
                    อำเภอ
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    
                    อำเภอปลายทาง
                  </Col>
                </Row>
              <Table 
                style={{  backgroundColor: '#ABCAD3'  }}
                dataSource={this.state.carID1} 
                columns={columns}
                bordered
                size="small"
                expandedRowRender= {
                  record => 
                  <p style={{ marginLeft: 200 }}> 
                    <div class="row">
                      <p style={{ width: '20%' }}> 
                        <h5 >{record.orderr}</h5>
                      </p>
                      <p style={{ width: '35%' }}> 
                        <h5 >{record.product}</h5>
                      </p>
                      <p style={{ width: '13%', textAlign: 'right' }}>
                        <h5>{record.pn}</h5>
                      </p>
                      <p style={{ width: '5%', textAlign: 'right' }}>
                        <h5>{record.nauy}</h5>
                      </p>
                    </div>
                  </p>
                }
                pagination={false} 
              />
            </Content>
          </div>
        </div>
      </Layout>
    </TabPane>
    <TabPane tab={<span style={{marginLeft: 100 ,  fontSize: '22px'  }}>2B : ตะวันออก </span>} key="2" >
      <Layout>
        <div >
          <div style={{ 'white-space':'pre-line'}}>
            <Content style={{backgroundColor: '#FFFFFF' }}>
              <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
                <Col span={7}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <img style={{height : 200  , float: "center" }} src ="/image/2B.png" alt ="" /></Col>
                  <Col span={5}>
                    <Row  style={{ marginTop: 50 }} >
                      volume ของรถใหญ่
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      <InputNumber  
                        style={{ fontSize: '20px', marginTop: 10 }}
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      %
                    </Row>
                    <Row >
                      volume ของรถเล็ก
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      <InputNumber  
                        style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                      <span>&nbsp;&nbsp;</span>
                      <span>&nbsp;&nbsp;</span>
                      %
                    </Row>
                  </Col>
                  <Col span={5}>
                    <Row style={{ marginTop: 50 }}>
                      <Button 
                        style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                        type='primary'
                        size='large'
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar2(vehicle,switch1=2)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                      </Button>
                    </Row>
                    <Row>
                      <Button 
                        type='primary'
                        size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar2(vehicle2,switch1=2)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                      </Button>
                    </Row>
                </Col>
                <Col span={7}> 
                <Carousel autoplay>
                <div>
                <img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe2.png" alt ="" />
                </div>
                <div>
                <img style={{height : 230 , float: "right" , paddingRight: '130px', paddingBottom: '20px' }} src ="/image/pipe22.png" alt ="" />
                </div>
                <div>
                <img style={{height : 230 , float: "right" , paddingRight: '200px', paddingBottom: '20px' }} src ="/image/pipe21.png" alt ="" />
                </div>
                <div>
                <img style={{height : 230 , float: "right" , paddingRight: '130px', paddingBottom: '20px' }} src ="/image/pipe23.png" alt ="" />
                </div>
                </Carousel>
                </Col>
              </Row>
            </Content>
            <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
              <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
                <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  คันที่
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
                  เส้นทาง
            
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  volume รถแต่ละคัน
                
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  volume
              
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                  จุด
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  
                  น้ำหนัก
                  &nbsp; &nbsp; &nbsp; &nbsp; 
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  
                  อำเภอ
                  &nbsp; &nbsp; &nbsp; &nbsp; 
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  
                  อำเภอปลายทาง
                </Col>
              </Row>
              <Table 
                style={{  backgroundColor: '#ABCAD3'  }}
                dataSource={this.state.carID2} 
                columns={columns}
                bordered
                size="small"
                expandedRowRender= {record => 
              <p style={{ marginLeft: 200 }}>
             
                <div class="row">

                  <p style={{ width: '20%' }}> 
                    <h5 >{record.orderr}</h5>
                  </p>

                  <p style={{ width: '35%' }}> 
                    <h5 >{record.product}</h5>
                  </p>

                  <p style={{ width: '13%', textAlign: 'right' }}>
                    <h5>{record.pn}</h5>
                  </p>

                   <p style={{ width: '5%', textAlign: 'right' }}>
                    <h5>{record.nauy}</h5>
                  </p>

                </div>
              </p>
            }
           
            pagination={false} 
          />
      
        </Content>
        </div>   {/* <NestedTable/> */}
       
      </div>

   
    </Layout>
    </TabPane>
    <TabPane  tab={<span style={{marginLeft: 100 ,  fontSize: '22px'  }}>3B : ภาคตะวันตก </span>} key="3" >
    <Layout>
      <div >
        <div style={{ 'white-space':'pre-line'}}>
          <Content style={{backgroundColor: '#FFFFFF' }}>
            <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
            <Col span={7}>
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <img style={{height : 200  , float: "center" }} src ="/image/3B.png" alt ="" /></Col>
              <Col span={5}>
                      <Row  style={{ marginTop: 50 }} >
                     
                        volume ของรถใหญ่
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10 }}
                       
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                         
                       
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
                      <Row >
                      volume ของรถเล็ก
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                       
                       <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
              </Col>
              <Col span={5}>
                  <Row style={{ marginTop: 50 }}>
                      <Button style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                         type='primary'
                         size='large'
                         
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar3(vehicle,switch1=3)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                        
                      </Button>
                      </Row>
                     
                    <Row>
                      <Button 
                      type='primary'
                      size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar3(vehicle2,switch1=3)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                        </Button>
                      </Row>
              </Col>
              <Col span={7}>
              <Carousel autoplay>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '130px', paddingBottom: '20px' }} src ="/image/pipe3.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '130px', paddingBottom: '20px' }} src ="/image/pipe31.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '200px', paddingBottom: '20px' }} src ="/image/pipe32.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '150px', paddingBottom: '20px' }} src ="/image/pipe33.png" alt ="" />
              </div>
              </Carousel>
              </Col>
          </Row>
        </Content>
     
        <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
        <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
       
            <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            คันที่
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
            เส้นทาง
       
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            volume รถแต่ละคัน
           
            &nbsp; &nbsp; &nbsp; &nbsp;
            volume
         
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            จุด
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
            น้ำหนัก
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอ
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอปลายทาง
            </Col>
          </Row>
          <Table 
            style={{  backgroundColor: '#ABCAD3'  }}
            dataSource={this.state.carID3} 
            columns={columns}
            bordered
            size="small"
            expandedRowRender= {record => 
              <p style={{ marginLeft: 200 }}>
             
                <div class="row">

                  <p style={{ width: '20%' }}> 
                    <h5 >{record.orderr}</h5>
                  </p>

                  <p style={{ width: '35%' }}> 
                    <h5 >{record.product}</h5>
                  </p>

                  <p style={{ width: '13%', textAlign: 'right' }}>
                    <h5>{record.pn}</h5>
                  </p>

                   <p style={{ width: '5%', textAlign: 'right' }}>
                    <h5>{record.nauy}</h5>
                  </p>

                </div>
              </p>
            }
           
            pagination={false} 
          />
        
        </Content>
        </div>
      
       
      </div>

    </Layout>
    </TabPane>
    <TabPane  tab={<span style={{marginLeft: 100 ,  fontSize: '22px'  }}>4B : ภาคเหนือ </span>} key="4"  >
    <Layout>
      <div >
        <div style={{ 'white-space':'pre-line'}}>
          <Content style={{backgroundColor: '#FFFFFF' }}>
            <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
            <Col span={7}>
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <img style={{height : 200  , float: "center" }} src ="/image/4B.png" alt ="" /></Col>
              <Col span={5}>
                      <Row  style={{ marginTop: 50 }} >
                     
                        volume ของรถใหญ่
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10 }}
                       
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                         
                       
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
                      <Row >
                      volume ของรถเล็ก
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                       
                       <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
              </Col>
              <Col span={5}>
                  <Row style={{ marginTop: 50 }}>
                      <Button style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                         type='primary'
                         size='large'
                         
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar4(vehicle,switch1=4)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                       
                      </Button>
                      </Row>
                      
                    <Row>
                      <Button 
                      type='primary'
                      size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar4(vehicle2,switch1=4)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                       </Button>
                      </Row>
              </Col>
              <Col span={7}>
              <Carousel autoplay>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe4.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '180px', paddingBottom: '20px' }} src ="/image/pipe41.png" alt ="" />
              </div>
              </Carousel>
              </Col>
          </Row>
        </Content>
     
        <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
        <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
       
            <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            คันที่
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
            เส้นทาง
       
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            volume รถแต่ละคัน
           
            &nbsp; &nbsp; &nbsp; &nbsp;
            volume
         
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            จุด
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
            น้ำหนัก
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอ
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอปลายทาง
            </Col>
          </Row>
          <Table 
            style={{  backgroundColor: '#ABCAD3'  }}
            dataSource={this.state.carID4} 
            columns={columns}
            bordered
            size="small"
            expandedRowRender= {record => 
              <p style={{ marginLeft: 200 }}>
             
                <div class="row">

                  <p style={{ width: '20%' }}> 
                    <h5 >{record.orderr}</h5>
                  </p>

                  <p style={{ width: '35%' }}> 
                    <h5 >{record.product}</h5>
                  </p>

                  <p style={{ width: '13%', textAlign: 'right' }}>
                    <h5>{record.pn}</h5>
                  </p>

                   <p style={{ width: '5%', textAlign: 'right' }}>
                    <h5>{record.nauy}</h5>
                  </p>

                </div>
              </p>
            }
           
            pagination={false} 
          />
         
        </Content>
        </div>
      
      </div>

     
    </Layout>
    </TabPane>
   <TabPane  tab={<span style={{marginLeft: 100 ,  fontSize: '22px'  }}>5B : ภาคอีสาน </span>} key="5"  >
   <Layout>
      <div >
        <div style={{ 'white-space':'pre-line'}}>
          <Content style={{backgroundColor: '#FFFFFF' }}>
            <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
            <Col span={7}>
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <img style={{height : 200  , float: "center" }} src ="/image/5B.png" alt ="" /></Col>
              <Col span={5}>
                      <Row  style={{ marginTop: 50 }} >
                     
                        volume ของรถใหญ่
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10 }}
                       
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                         
                       
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
                      <Row >
                      volume ของรถเล็ก
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                       
                       <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
              </Col>
              <Col span={5}>
                  <Row style={{ marginTop: 50 }}>
                      <Button style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                         type='primary'
                         size='large'
                         
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar5(vehicle,switch1=5)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                      
                      </Button>
                      </Row>
                     
                    <Row>
                      <Button 
                      type='primary'
                      size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar5(vehicle2,switch1=5)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                         </Button>
                      </Row>
              </Col>
              
              <Col span={7}>
              <Carousel autoplay>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe5.png" alt ="" />
              </div>
              <div><img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe51.png" alt ="" />
              </div>
              <div><img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe52.png" alt ="" />
              </div>
              <div><img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe53.png" alt ="" />
              </div>
              </Carousel>
              </Col>
              
          </Row>
        </Content>
     
        <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
        <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
       
            <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            คันที่
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
            เส้นทาง
       
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            volume รถแต่ละคัน
           
            &nbsp; &nbsp; &nbsp; &nbsp;
            volume
         
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            จุด
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
            น้ำหนัก
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอ
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอปลายทาง
            </Col>
          </Row>
          <Table 
            style={{  backgroundColor: '#ABCAD3'  }}
            dataSource={this.state.carID5} 
            columns={columns}
            bordered
            size="small"
            expandedRowRender= {record => 
              <p style={{ marginLeft: 200 }}>
             
                <div class="row">

                  <p style={{ width: '20%' }}> 
                    <h5 >{record.orderr}</h5>
                  </p>

                  <p style={{ width: '35%' }}> 
                    <h5 >{record.product}</h5>
                  </p>

                  <p style={{ width: '13%', textAlign: 'right' }}>
                    <h5>{record.pn}</h5>
                  </p>

                   <p style={{ width: '5%', textAlign: 'right' }}>
                    <h5>{record.nauy}</h5>
                  </p>

                </div>
              </p>
            }
           
            pagination={false} 
          />
         
        </Content>
        </div>
    
       
      </div>

    </Layout>
    </TabPane>
    <TabPane  tab={<span style={{marginLeft: 90 ,  fontSize: '22px'  }}>6B : ภาคใต้ </span>} key="6"  > 
    <Layout>
      <div >
        <div style={{ 'white-space':'pre-line'}}>
          <Content style={{backgroundColor: '#FFFFFF' }}>
            <Row  style={{ fontSize: '22px'  ,paddingBottom: '0px' }} >
            <Col span={7}>
            <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <img style={{height : 200  , float: "center" }} src ="/image/6B.png" alt ="" /></Col>
              <Col span={5}>
                      <Row  style={{ marginTop: 50 }} >
                     
                        volume ของรถใหญ่
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10 }}
                       
                        size="large"
                        step={5}
                        min={50} 
                        max={200} 
                        defaultValue={100} 
                        onChange={vehicle_Changed} 
                      />
                         
                       
                        <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
                      <Row >
                      volume ของรถเล็ก
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                      <InputNumber  style={{ fontSize: '20px', marginTop: 10}}
                        size="large"
                        min={50} 
                        max={200} 
                        step={5}
                        defaultValue={70} 
                        onChange={vehicle_Changed2} 
                      />
                       
                       <span>&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        %
                       
                      </Row>
              </Col>
              <Col span={5}>
                  <Row style={{ marginTop: 50 }}>
                      <Button style={{ fontSize: '22px', marginTop: 10 ,backgroundColor: '#FFFFFF',color: '#000000'}}
                         type='primary'
                         size='large'
                         
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickBigCar6(vehicle,switch1=6)}>
                        รถใหญ่  &nbsp;  &nbsp;
                        <Icon type="car" />
                      
                      </Button>
                      </Row>
                     
                    <Row>
                      <Button 
                      type='primary'
                      size='large'
                        style={{ fontSize: '22px', marginTop: 10,backgroundColor: '#FFFFFF',color: '#000000'}}
                        className="btn btn-block btn-secondary title" 
                        onClick={()=> this.WhenClickSmallCar6(vehicle2,switch1=6)}>
                        รถเล็ก  &nbsp; &nbsp; &nbsp;
                        <Icon type="car" />
                       </Button>
                      </Row>
              </Col>
              <Col span={7}>
              <Carousel autoplay>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '100px', paddingBottom: '20px' }} src ="/image/pipe6.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '180px', paddingBottom: '20px' }} src ="/image/pipe61.png" alt ="" />
              </div>
              <div>
              <img style={{height : 230 , float: "right" , paddingRight: '180px', paddingBottom: '20px' }} src ="/image/pipe62.png" alt ="" />
              </div>
              </Carousel>
              </Col>
          </Row>
        </Content>
     
        <Content style={{  paddingLeft: '100px',paddingRight: '100px',paddingTop: '30px', backgroundColor: '#D6E2E7' }}>
        <Row style={{  backgroundColor: '#FFFFFF' , marginRight: '10px' , marginLeft: '10px' }}>
       
            <Col span={24} style={{ fontSize: '20px' , margin: 2 }} > 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            คันที่
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   
            เส้นทาง
       
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            volume รถแต่ละคัน
           
            &nbsp; &nbsp; &nbsp; &nbsp;
            volume
         
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            จุด
            &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
            น้ำหนัก
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอ
            &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp;
             
            อำเภอปลายทาง
            </Col>
          </Row>
          <Table 
            style={{  backgroundColor: '#ABCAD3'  }}
            dataSource={this.state.carID6} 
            columns={columns}
            bordered
            size="small"
            expandedRowRender= {record => 
              <p style={{ marginLeft: 200 }}>
             
                <div class="row">

                  <p style={{ width: '20%' }}> 
                    <h5 >{record.orderr}</h5>
                  </p>

                  <p style={{ width: '35%' }}> 
                    <h5 >{record.product}</h5>
                  </p>

                  <p style={{ width: '13%', textAlign: 'right' }}>
                    <h5>{record.pn}</h5>
                  </p>

                   <p style={{ width: '5%', textAlign: 'right' }}>
                    <h5>{record.nauy}</h5>
                  </p>
                </div>
              </p>
            }
            pagination={false} 
          />
        </Content>
        </div>
        </div>
      </Layout>
    </TabPane> 
  </Tabs> 
  );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCROp1PViIDjSaGKd5cdTocZJ0cXZhtrdc")
})(Core)