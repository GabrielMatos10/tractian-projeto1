import { Switch, Route, Redirect } from "react-router";
import Graphs from "./components/Graphs/Graphs";
import Home from "./components/Home/Home";
import Motor from "./components/Motor/Motor";
import Usuarios from "./components/Usuarios/Usuarios";
import Form from "./components/Form/Form"


const Routes = (props) => {
  return(
    <Switch location={props.location}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/assets" component={Motor}/>
      <Route exact path="/users" component={Usuarios}/>
      <Route exact path="/graphs" component={Graphs}/>
      <Route exact path="/register" component={Form}/>
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes