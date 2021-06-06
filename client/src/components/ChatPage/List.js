import React from 'react'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div className="chat-list">
                <div className="chat-list-head">
                    <img src='./plus.svg' className="ico-plus" />
                </div>
                <div className="chat-list-main">
                    <div className="cl-main chat-list-title">
                        Chats
                </div>
                    <div className="cl-main chat-search">
                        <input className="chat-search-form" placeholder="Search" />
                        <img src='./loupe.svg' />
                    </div>
                    <div className="list-users">
                        {this.state.list.map((key) => {
                            console.log("list user", key)
                            return (<div></div>
                                //     <div key="index" className="chats-user">
                                //         <div className="avt-user">
                                //             <img src={key.avt} />
                                //         </div>
                                //         <div className="user">{key.user}</div>
                                //     </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}