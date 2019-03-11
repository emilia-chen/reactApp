import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'


import Button from './Button';
//import ParamsExample from './ParamsExample2';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
import Grid from './Grid';
import Layout from './Layout';


import Affix from './Affix.js';
import Breadcrumb from './Breadcrumb.js';
import Dropdown from './Dropdown.js';
import Menu from './Menu.js';
import Pagination from './Pagination.js';
import Steps from './Steps.js';

import AutoComplete from './AutoComplete.js';
import Cascader from './Cascader.js';
import Checkbox from './Checkbox.js';
import DatePicker from './DatePicker.js';
import Form from './Form.js';
import Input from './Input.js';

import InputNumber from './InputNumber.js';
import Mention from './Mention.js';
import Radio from './Radio.js';
import Rate from './Rate.js';
import Select from './Select.js';
import Slider from './Slider.js';

import ReactSwitch from './Switch.js';
import Transfer  from './Transfer.js';
import TimePicker from './TimePicker.js';
import TreeSelect from './TreeSelect.js';
import Upload from './Upload.js';


import Avatar from './Avatar.js';
import Badge  from './Badge.js';
import Calendar from './Calendar.js';
import Card from './Card.js';
import Carousel from './Carousel.js';
import Collapse from './Collapse.js';
import Comment  from './Comment.js';
import Empty from './Empty.js';
import List from './List.js';
import Popover from './Popover.js';
import ReactStatistic from './ReactStatistic.js';
import Tooltip from './Tooltip.js';
import Table  from './Table.js';
import Tabs from './Tabs.js';
import Tag from './Tag.js';
import Timeline from './Timeline.js';
import Tree from './Tree.js';


import Alert from './Alert.js';
import Drawer from './Drawer.js';
import Modal from './Modal.js';
import Message from './Message.js';
import Notification from './Notification.js';
import Progress from './Progress.js';
import Popconfirm from './Popconfirm.js';
import Spin from './Spin.js';
import Skeleton from './Skeleton.js';

import Anchor from './Anchor.js';
import BackTop from './BackTop.js';
import ConfigProvider from './ConfigProvider.js';
import Divider from './Divider.js';
import LocaleProvider from './LocaleProvider.js';




import CommentTest from './CommentTest.js';
import CommentList from './ComentList.js';

import RadioGroup from './RadioGroup.js';
import RadioOption from './RadioOption.js';

import Context from './Context.js';
import ReactResizable from './ReactResizable.js';



const ParamsExample = Loadable({
  loader: () => import("./ParamsExample2"),
  loading: Loading,
});

// const routes = {
//   path: '/',
//   component: App,
//   childRoutes: [
//     { path: 'about', component: About },
//     { path: 'inbox', component: Inbox },
//   ]
// }



ReactDOM.render(


<Router>
<Switch>
<Route path="/ReactResizable" component={ReactResizable} />

<Route path="/Context" component={Context} />

<Route path="/button" component={Button} />
<Route path="/app" component={App} />
<Route path="/grid" component={Grid} />
<Route path="/layout" component={Layout} />

<Route path="/Affix" component={Affix} />
<Route path="/Breadcrumb" component={Breadcrumb} />
<Route path="/Dropdown" component={Dropdown} />
<Route path="/Menu" component={Menu} />
<Route path="/Pagination" component={Pagination} />
<Route path="/Steps" component={Steps} />

<Route path="/AutoComplete" component={AutoComplete} />
<Route path="/Cascader" component={Cascader} />
<Route path="/Checkbox" component={Checkbox} />
<Route path="/DatePicker" component={DatePicker} />
<Route path="/Form" component={Form} />
<Route path="/Input" component={Input} />

<Route path="/InputNumber" component={InputNumber} />
<Route path="/Mention" component={Mention} />
<Route path="/Radio" component={Radio} />
<Route path="/Rate" component={Rate} />
<Route path="/Form" component={Form} />
<Route path="/Select" component={Select} />

<Route path="/Slider" component={Slider} />
<Route path="/ReactSwitch" component={ReactSwitch} />
<Route path="/Transfer" component={Transfer} />
<Route path="/TimePicker" component={TimePicker} />
<Route path="/TreeSelect" component={TreeSelect} />
<Route path="/Upload" component={Upload} />



<Route path="/Avatar" component={Avatar} />
<Route path="/Badge" component={Badge} />
<Route path="/Calendar" component={Calendar} />
<Route path="/Card" component={Card} />
<Route path="/Carousel" component={Carousel} />
<Route path="/Collapse" component={Collapse} />

<Route path="/Comment" component={Comment} />
<Route path="/Empty" component={Empty} />
<Route path="/List" component={List} />
<Route path="/Popover" component={Popover} />
<Route path="/Statistic" component={ReactStatistic} />
<Route path="/Tooltip" component={Tooltip} />
<Route path="/Table" component={Table} />
<Route path="/Tabs" component={Tabs} />
<Route path="/Tag" component={Tag} />
<Route path="/Timeline" component={Timeline} />
<Route path="/Tree" component={Tree} />


<Route path="/Alert" component={Alert} />
<Route path="/Drawer" component={Drawer} />
<Route path="/Modal" component={Modal} />
<Route path="/Message" component={Message} />
<Route path="/Notification" component={Notification} />
<Route path="/Progress" component={Progress} />
<Route path="/Popconfirm" component={Popconfirm} />
<Route path="/Spin" component={Spin} />
<Route path="/Skeleton" component={Skeleton} />

<Route path="/Anchor" component={Anchor} />
<Route path="/BackTop" component={BackTop} />
<Route path="/ConfigProvider" component={ConfigProvider} />
<Route path="/Divider" component={Divider} />
<Route path="/LocaleProvider" component={LocaleProvider} />



<Route path="/CommentTest" component={CommentTest} />
<Route path="/CommentList" component={CommentList} />

<Route path="/aaa" render={()=>(<RadioGroup name="option">
    <RadioOption label="选项一" value="1" />
    <RadioOption label="选项二" value="2" />
  {  ({ onRowsRendered }) => (
    	 <RadioOption label="选项3" value="3" />
    	)
  }
  </RadioGroup>)} />



</Switch>
</Router>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
