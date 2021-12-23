const Intro = (props) => (
    <div>
        <div>
            <h3>Talks</h3>
            <div className="card">
              <p>Zero Database Downtime with etcd-operator</p>
              <div>
                <iframe width="100%" height="300"
                src="https://www.youtube.com/embed/Za9RkS42nbU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              </div>
              <a href="https://kccnceu20.sched.com/event/Zeqj/zero-database-downtime-with-etcd-operator-tyler-lisowski-kodie-glosser-ibm">Speaker Deck</a>
              <div class="text-right">
                {new Date("2020-08-17").toLocaleDateString()}
                </div>
            </div>
        </div>

    </div>
)

export default Intro
