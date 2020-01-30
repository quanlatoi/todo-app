import React from 'react';
import App from '../container/App';

function AsyncFunction(component) {
    class AsyncComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              component: null
            };
          }
        async componentDidMount(){
            this.mounted = true;
            const {default: Component} = await component();
            
            if (this.mounted) {
                this.setState({
                component: <Component {...this.props} />
                });
            }
        }
        render(){
            const Component = this.state.component;
            return(
                <App component={Component} />
            )
        }
    }
    return AsyncComponent
}

export { AsyncFunction }