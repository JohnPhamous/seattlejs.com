export default function ({ html, state }) {
  let { store = {} } = state
  let { event } = store
  return html`
    <style>
      .workshop {
        margin-bottom:16px;
      }

      .workshop a {
        color: #000;
      }

      @media only screen and (min-width: 768px) {
        #speaker-list {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
        }
        .workshop {
          display: flex;
          flex-wrap: wrap;
        }
        .workshop h3 {
          margin-top: 0;
        }
      }
    </style>
    <my-layout>
      <div id="page">
        <!-- no title needed -->
        <div class="page-body">
          <div style="text-align:center"><img width="500" src="/_public/images/seattlejsconf-2023-logo.png" alt="logo for SeattleJS Conf 2023"/></div>
          <p>SeattleJS Conf is a very special 1-day conference bringing together ~300 web developers to learn, network and have fun!</p>
          <p>The talks, from industry exports, will cover the latest and greatest in web technologies, from CSS View Transitions to Deno 2.0 to AI.</p>
          <p>The event is being hosted by AWS and will feature a post-conference karaoke party at Optimism Brewing that you won't want to miss!</p>
          <h2>When</h2>
          <ul>
            <li>Tuesday, August 8, 2023</li>
            <li>Doors open at 8am</li>
            <li>Talks run from 9am - 5pm</li>
            <li>Closing Party runs from 7pm - midnight</li>
          </ul>
          <h2>Where</h2>
          <div><img src="https://2022.cascadiajs.com/images/past/cjs18-sponsor.jpg" alt="Amazon Meeting Center"/></div>
          <ul>
            <li>The Amazon Meeting Center</li>
            <li><a target="_blank" href="https://goo.gl/maps/vmFir1ayC8oo4pYr7?coh=178573&entry=tt">2031 7th Ave, Seattle, WA 98121</a></li>
            <li>Please use public transportation (bus or light rail) if possible.</li>
          </ul>
          <h2>Speakers</h2>
          <section id="speaker-list">
          ${event.talks
            .sort(() => Math.random() - 0.5) // randomize our array of speakers!
            .map(
              t => html` <view-talk id="${ t.id }"></view-talk>`
            )
            .join('')}
          </section>
          <h2>Sponsors</h2>
          <section id="sponsors">
            <p>Please email info@seattlejs.com if you are interested in learning about sponsoring this event!</p>
            <view-sponsor tier="platinum" name="AWS" url="https://docs.amplify.aws/" image="aws.png"></view-sponsor>
            <view-sponsor tier="gold" name="Courier" url="http://courier.com?utm_campaign=q2-fy23-conference-seattlejsconf&utm_source=conference&utm_medium=website" image="courier.png"></view-sponsor>
            <view-sponsor tier="gold" name="Mux" url="http://mux.com" image="mux.svg"></view-sponsor>
          </section>
          <h2>Training Workshops</h2>
          <section id="training">
            <p>We are hosting Training Workshops before and after the conference. These are full-day workshops and are designed to level up your skills as a web developer.</p>
            ${ event.workshops.map(w => html`
              <div class="workshop">
                <div style="width:200px;margin-right:24px;">
                  <img src="/_public/images/speakers/${ w.speaker.photo }"/>
                </div>
                <div style="flex:1">
                  <h3><a href="/workshops/${ w.id }">${ w.title }</a></h3>
                  <p>${ w.short || w.abstract }</p>
                </div>
              </div>
            `).join('')}
          </section>
          <h2>Organizers</h2>
          <section id="organizers">
              <list-organizers></list-organizer>
          </section>
          <h2>Scholarships</h2>
          <p>We are <a target="_blank" href="https://airtable.com/shrZcxLRhznKQ1sIm">accepting applications</a> for our Scholarship Program! If you are an under-represented minority in tech or need financial aid in order to attend this event, please consider applying. We want everyone to be able to attend this event! And if you are in a position to help fund this program, please consider making a donation below when you buy your ticket ❤️</p>
          <h2>Tickets</h2>
          <tito-widget event="event-loop/seattlejs-conf-2023"></tito-widget> 
        </div>
      </div>
    </my-layout>
  `
}
