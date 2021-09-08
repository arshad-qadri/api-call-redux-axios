import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { getData } from "./redux/actions";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data.data);

  useEffect(() => {
    dispatch(getData());
    console.log("test");
  }, [dispatch]);
  return (
    <div className="App">
      <NavLink to="/comp1">
        <button>Component 1 </button>
      </NavLink>
      <NavLink to="/comp2">
        <button>Component 2 </button>
      </NavLink>
      <NavLink to="/comp3">
        <button>Component 3 </button>
      </NavLink>

      <Switch>
        <Route exact path="/comp1" component={() => <Comp1 data={data} />} />
        <Route exact path="/comp2" component={() => <Comp2 data={data} />} />
        <Route exact path="/comp3" component={() => <Comp3 data={data} />} />
        {/* <Comp1 data={data} />
      <Comp2 data={data} />
      <Comp3 data={data} /> */}
      </Switch>
    </div>
  );
}

export default App;
