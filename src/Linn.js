const Linn = (props) => (
    <div class="row">
        <div class="column-left">
            <img alt="" style={{ borderRadius: 5 + '%' }} width="400" src={props.andmed.pilt} />
        </div>
        <div class="column-right">
            <div className="App-heading">{props.andmed.nimi}</div>
            <p>{props.andmed.kirjeldus}</p>
        </div>
    </div>
)

export default Linn;