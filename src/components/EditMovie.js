import React from 'react';
import serialize from 'form-serialize';
import axios from 'axios';

class EditMovie extends React.Component {
    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    onInputChange = (e) => {
      console.log(e);
    }

    async componentDidMount() {

        const params = this.props.value;
        console.log("fvvcvfdcfd");
        console.log(params);
        /*console.log(id);

        const response = await axios.get(`http://localhost:3002/movies/${id}`);

        const movie = response.data;

        this.setState({
            name:movie.name,
            rating:movie.rating,
            overview:movie.overview,
            imageURL:movie.imageURL
        })
*/
    }


    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" 
                                onChange={this.onInputChange}
                                value={this.state.name}/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.rating} 
                                onChange={this.onInputChange}
                                />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL"
                                onChange={this.onInputChange}
                                value={this.state.imageURL} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overwiew" 
                                onChange={this.onInputChange}
                                value={this.state.overview}
                                rows="5"></textarea>
                        </div>
                    </div>
                    {/*history--> uygulamamızın gittiği linkleri saklan bir nesnedir
              Add Movie 'e tıklandığında historyde ki anasayfaya götür işlemi yaptırıcaz*/}
                    < input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
                </form>
            </div>

        )

    }
}

export default EditMovie;