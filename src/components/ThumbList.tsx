import React from 'react'
import Thumb from './Thumb'

interface State {
    isLoaded: boolean;
    error: string
}

export class ThumbList extends React.Component<any, State> {

    state: Readonly<State> = {
        isLoaded: false,
        error: ''
    }

    render() {

        if (!this.props.loaded) {
            return (<div className="thumbs_container">Loading...</div>)
        }
        else {

            const { thumbs: movies } = this.props;
            const thumbs = movies.map((movie: any, index: number) => {

                return (
                    <Thumb
                        key={index}
                        movie={movie}
                    />
                );
            });
            return (
                <React.Fragment>
                    <div className="thumbs_view">
                        <div className="thumbs_container">
                            {thumbs}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}