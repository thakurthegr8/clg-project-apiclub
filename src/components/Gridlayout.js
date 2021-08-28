import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import GridCard from './Gridcard'


export default class Gridlayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            breakpointColumnsObj : {
                default: 3,
                1100: 3,
                700: 2,
                500: 2
              },
          images:[
              {
                  'url':'https://images.pexels.com/photos/1977056/pexels-photo-1977056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  'name':'Carla',
                  'designation':'Executive head'
              },
              {
                'url':'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'name':'Jessica',
                'designation':'Committee head'
            },
            {
                'url':'https://images.pexels.com/photos/4904569/pexels-photo-4904569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'name':'Elliot',
                'designation':'Executive head'
            },
            {
                'url':'https://images.pexels.com/photos/4728658/pexels-photo-4728658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'name':'Sarah',
                'designation':'Executive head'
            },
            {
                'url':'https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'name':'Sarah',
                'designation':'Executive head'
            },
            {
                'url':'https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'name':'Max',
                'designation':'Executive head'
            },
          ]    
        }
    }
    render() {
        return (
            <div className="w-full mx-auto container mt-8">
            <Masonry
            breakpointCols={this.state.breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
              {
                  this.state.images.map(item=>{
                      return(
                          <GridCard item = {item} key={Math.random()}/>
                      )
                  })
              }
           
          </Masonry>
          </div>
        )
    }
}
