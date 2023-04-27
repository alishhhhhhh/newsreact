import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItems from "./NewsItems";
import ReactDOM from 'react-dom'
import Spinner from "./Spinner";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general', 
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }



  constructor() {
    super();
    console.log("const from newss");
    this.state = {
      articles: [],
      loading: false,
      page: 1

    };
  }

  async componentDidMount() {
    let url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca81330fe32424ca1de0a203d9aa46d&pageSize=${this.props.pageSize}&page=${this.state.page = 1}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false


    })
    console.log(this.articles)



  }

  next = async () => {

    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {

    }
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca81330fe32424ca1de0a203d9aa46d&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    this.setState({loading:true})
   
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })

  }




  prev = async () => {
    console.log("prvv");


    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ca81330fe32424ca1de0a203d9aa46d&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.setState({loading:true})
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false


    })



  }






  render() {
    return (
      <div className="">
  
        <h1 className="text-3xl text-center">Get Some News.........</h1>
        {this.state.loading &&<Spinner  />}

        <div className=" p-8 lg:p-12  lg:mx-6 m-auto md:p-14 mx-4 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-2">

          {console.log(this.articles, "mfffff")}
          {!this.state.loading && this.state.articles.map((element) => {
            return (

              <NewsItems
                key={element.url}
                imageurl={element.urlToImage ? element.urlToImage : "https://picsum.photos/200"}

                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                newsUrl={element.url}
              />
            );
          })}

        </div>

        <div className="justify-between flex  mb-10 align-middle ">

          <button type="button" disabled={this.state.page <= 1} onClick={this.prev} className=" cursor-pointer bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
            <div className="flex flex-row align-middle">
              <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.page)} type="button" onClick={this.next} className=" cursor-pointer bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
            <div className="flex flex-row align-middle">
              <span className="mr-2">Next</span>
              <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </button>

        </div>

      </div>
    );
  }

}

export default News;
