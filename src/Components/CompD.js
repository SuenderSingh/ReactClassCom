import React, { Component } from 'react'
import { UserConsumer } from './UserContext39'


 class CompD extends Component {
    render() {
        return (
            <div>
                <UserConsumer>

                    {

                        username => {
                            return <div> Hellow {username}</div>
                        }
                    }


                </UserConsumer>


            </div>
        )
    }
}

export default CompD