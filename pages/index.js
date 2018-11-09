import React from 'react'
import ReactTooltip from 'react-tooltip'
import Head from 'next/head'
import Link from 'next/link'


export default class extends React.Component {
  static async getInitialProps({req}) {
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {}
  }

  constructor(props) {
    super(props);
    this.state = {
      timing: 180,
      bpm: 120,
      vocal: 0,
      backVocal: 0,
      guitarAc: 0,
      guitar: 0,
      guitarLine: 0,
      base: 0,
      baseLine: 0,
      additional: 0,
      synth: 0,
      arrange: false,
      session: 0,
      consultation: false,
      urgency: 0,
      price: 0,
      reInstrument: 0,
      reVocal: 0,
      urgent: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.calculatePrice();
  }

  calculatePrice() {
    let price = 0;


    price = this.state.timing * (
      +this.state.vocal * 4 +
      +this.state.backVocal +
      +this.state.guitar * 3 +
      +this.state.guitarAc * 3.5 +
      +this.state.guitarLine * 5 +
      +this.state.base * 3 +
      +this.state.baseLine * 4 +
      +this.state.additional * 3 +
      +this.state.reInstrument * 4 +
      +this.state.reVocal * 4 +
      +this.state.synth * 1.75
    ) * this.state.bpm / 120;

    // price = price + price * 0.33 * (this.state.arrange ? 1 : 0) + this.state.session * 300;

    price = price + 0.5 * price * this.state.urgent;
    price = price + 0.5 * price * this.state.arrange;

    this.setState({
      price: Math.round(price / 10) * 1000 / 100,
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const state = {};
    state[event.currentTarget.name] = value;
    this.setState(state, () => {
      this.calculatePrice();
    });

  }

  render() {
    return (
      <div className="zv-layout">

        <div className="zv-logo">
        </div>

        <div className="price-sticky"><span>Стоимость: </span>{this.state.price}<span>₴</span></div>

        <div className="zv-box">


          // TODO

          // Линия/комбо — в скобках
          // Усилитель — комбоусилитель
          // Сначала всегда линия
          // Стоимость прилипшая всегда сверху
          // Подсказки — взять из таблицы

          <div className="zv-box _inner">
            <h2>
              Стоимость
            </h2>
            <div className="zv-line">
              <div className="zv-calc">
                <label>Тайминг</label>
                <input type="number" name={"timing"} value={this.state.timing} onChange={this.handleChange}/>
                <span>В секундах</span>
              </div>
              <div className="zv-calc">
                <label>BPM</label>
                <input type="number" name={"bpm"} value={this.state.bpm} onChange={this.handleChange}/>
                <span> </span>
              </div>
              <div className="zv-calc">
                <label>Вокал</label>
                <input type="number" name={"vocal"} value={this.state.vocal} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Бек-вокал</label>
                <input type="number" name={"backVocal"} value={this.state.backVocal} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
            </div>

            <div className="zv-line">
              <div className="zv-calc">
                <label>Электроакустическая гитара — линия + микрофон</label>
                <input type="number" name={"guitarAc"} value={this.state.guitarAc} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Электрогитара — усилитель</label>
                <input type="number" name={"guitar"} value={this.state.guitar} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Электрогитара — линия</label>
                <input type="number" name={"guitarLine"} value={this.state.guitarLine} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Бас-гитара — усилитель</label>
                <input type="number" name={"base"} value={this.state.base} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div data-tip="Басисты не нужны." className="zv-calc">
                <label>Бас-гитара — линия</label>
                <input type="number" name={"baseLine"} value={this.state.baseLine} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
            </div>

            <div className="zv-line">
              <div className="zv-calc">
                <label>Другие инструменты</label>
                <input type="number" name={"additional"} value={this.state.additional} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Синтетический трек</label>
                <input type="number" name={"synth"} value={this.state.synth} onChange={this.handleChange}/>
                <span>Кол-во треков</span>
              </div>
              <div className="zv-calc">
                <label>Повторная запись вокала</label>
                <input type="number" name={"reVocal"} value={this.state.reVocal} onChange={this.handleChange}/>
                <span> </span>
              </div>
              <div className="zv-calc">
                <label>Повторная запись инструмента</label>
                <input type="number" name={"reInstrument"} value={this.state.reInstrument}
                       onChange={this.handleChange}/>
                <span> </span>
              </div>
            </div>


            <div className="zv-line">

              <div className="zv-calc">
                <label>Аранжировка</label>
                <label>
                  <input type="Checkbox" name={"arrange"} value={this.state.arrange} onChange={this.handleChange}/>
                  <div/>

                </label>
                <span> </span>
                {/*<span>{this.state.arrange ? 'Да' : 'Нет'}</span>*/}
              </div>

              <div className="zv-calc">
                <label>Срочный заказ</label>
                <label>
                  <input type="Checkbox" name={"urgent"} value={this.state.urgent} onChange={this.handleChange}/>
                  <div/>

                </label>
                <span> </span>
                {/*<span>{this.state.urgent ? 'Да' : 'Нет'}</span>*/}
              </div>

              {/*<div className="zv-calc">
                <label>Сессионый музыкант</label>
                <input type="number" name={"session"} value={this.state.session} onChange={this.handleChange} />
              </div>*/}
              {/*<div className="zv-calc">
                <label>Консультация преподователя по вокалу</label>
                <label>
                  <input type="Checkbox" name={"consultation"} value={this.state.consultation} onChange={this.handleChange} />
                  <div />
                  {this.state.consultation ? 'Нужна' : 'Не нужна'}
                </label>
              </div>*/}
            </div>

            {/*<h2>
              Дополнительно
            </h2>
            <div className="zv-line">
              <div className="zv-calc">
                <label>Срочность</label>
                <input type="number" value="0" />
              </div>
              <div className="zv-calc">
                <label>Повторная запись вокала</label>
                <input type="number" value="0" />
              </div>
              <div className="zv-calc">
                <label>Повторная запись инструмента</label>
                <input type="number" value="0" />
              </div>
              <div className="zv-calc">
              </div>
              <div className="zv-calc">
              </div>
            </div>*/}

            <h2>
              Стоимость
            </h2>
            <div className="zv-line">
              <div className="zv-calc">
                <label> </label>
                <div className="price">{this.state.price}<span>₴</span></div>
                <span> </span>
              </div>
            </div>
          </div>
          <div className="zv-copyright">
            Студия ZVUK™ — и время не в счет.
          </div>


        </div>
        <ReactTooltip />
      </div>
    )
  }
}