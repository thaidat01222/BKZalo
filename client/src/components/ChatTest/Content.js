export default function Content () {
    return (
        <div className="chat-content">
        <div className="user-chatting">
            <div className="user-name">
                User Chatting
                </div>
            <button className="btn-setting">
                <img src='./settings.svg' />
            </button>
        </div>
        <div className="message">

        </div>
        <div className="chat-box">
            <div className="">
                <button className="btn-chat-box btn-more">
                    <img src="./more.svg" />
                </button>
                <button className="btn-chat-box btn-photo">
                    <img src='./gallery.svg' />
                </button>
                <button className="btn-chat-box btn-stick">
                    <img src='./sticker.svg' />
                </button>
            </div>
            <input type="text" className="chat-box-input" placeholder="Typing messenger" />
            <button className="btn-chat-box btn-send">
                <img src='./send.svg' />
            </button>
        </div>
    </div>
    )
}