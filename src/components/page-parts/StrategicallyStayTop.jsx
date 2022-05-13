import { Link } from "gatsby"
import React from "react"

const StrategicallyStayTop = () => {
  return (
    <>
      <section className="container mx-auto pt-24 pb-28 lg:pt-12 lg:pb-16">
        <h2 className="text-center text-5xl text-black leading-tight font-oswald  pb-20 lg:pb-12 capitalize">
          Strategically <span className="text-green">stay top </span> 
         of mind with prospective customers
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-none">
          <div className="">
            <div className="prose">
              <p>
                You're not capturing every person who comes to your site;
                they’re gone and you lost them. Here’s how you can continue to
                influence them after they leave.
              </p>

              <p>
                Every website that sells a service or product has the same basic
                goal. Turn a visitor into a lead. That’s why on good websites
                you see phone numbers, web chat, web forms, great copywriting,
                visuals, case studies and hundreds of other efforts to attract
                and entice every visitor to make contact and take the next step
                towards buying.
              </p>

              <p>
                Yet, each day visitors come and leave your website without ever
                taking any action at all. They look, they leave, and you never
                have any way of helping them see the value you offer. That all
                changes today.
                <b>
                  Clixsy’s Smarter Ads™ are like having your own X-Ray on your
                  website where you get hand delivered every single day the
                  name, email, mailing address and sometimes even phone numbers
                  of the people that visit your website.
                </b>
              </p>

              <p>
                How do you ask? Think about how Fingerprint ID systems work.
                It’s a lot like that. See, when you visit websites nearly all of
                us (who don’t wear tinfoil hats) leave a sort of digital
                fingerprint that’s unique to us. It’s called encryption, and
                without getting super fancy and technical your email address
                always encrypts to the same ID when it’s run through the most
                common encryption protocol.
              </p>
            </div>
          </div>

          <div className="prose">
            <p>
              {" "}
              So just like a fingerprint database, once you’re in the list and
              you show up on a website with our code – BOOM! We know it, and we
              can start marketing to you specifically.{" "}
              <b>
                Through email, through social media, even…through direct mail!
              </b>
            </p>

            <p>
              {" "}
              Clixsy’s online advertising campaigns take PPC / Adwords to a new
              level. Our proven, proprietary Smarter Ads technology puts you in
              front of *THE* actual people that are ready to buy what you sell.
            </p>

            <p>
              {" "}
              No agency can make you visible in front of every prospect in your
              market no matter how good they are at display ads or Facebook. We,
              on the other hand, can put you in front of actual people who have
              shown a real interest in your service in ways that no existing ad
              platform does. Even agencies that are really good at targeting
              cannot get the results we can. The reason?{" "}
              <b>
                No advertising platform, not even Facebook, offers the ability
                to specifically target individuals based on such granular
                behaviors as Clixsy.
              </b>
            </p>
          </div>
        </div>
        <Link className="form_btn" to="/contact-us">
          Target my Market
        </Link>
      </section>
    </>
  )
}

export default StrategicallyStayTop
