import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-199831845-1");
    ReactGa.pageview('daniel-abedoy-web.herokuapp.com - Loading Screen'); 
    //--Motasim Foads Portfolio website Google analytics--
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/inicio" />
      : <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Daniel Abedoy</title>
          <meta name="description" content="Daniel Abedoy- Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#8dbe05e7"}
            loading={true}
          />
        </div>
      </div>
  }
}

export default Loading;
