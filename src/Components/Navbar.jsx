import { useState } from "react";

function Navbar() {
  let [exporeOpen, exporeOpenHandler] = useState(false);
  let [talentOpen, talentOpenHandler] = useState(false);
  let [hiredOpen, hiredOpenHandler] = useState(false);
  return (
    <>
      <div className="text-sm flex items-center gap-8">
        <div
          className="relative"
          onMouseEnter={() => exporeOpenHandler(true)}
          onMouseLeave={() => exporeOpenHandler(false)}
        >
          <p className="cursor-pointer font-semibold hover:text-black/60">
            Explore
          </p>
          <div
            className={
              exporeOpen ? "absolute block top-0 py-4 -left-5" : "hidden"
            }
          >
            <div className="bg-white p-3  rounded-lg my-5 top-4 custom-shadow w-60">
              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m22 7-7.869 7.869c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668L9.13 12.13c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L2 17M22 7h-7m7 0v7"
                  />
                </svg>
                Popular
              </p>

              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex items-center gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  aria-hidden="true"
                  className="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.167"
                    d="m7 1.167-.759 3.037c-.148.592-.222.888-.376 1.13a1.75 1.75 0 0 1-.531.53c-.241.155-.538.229-1.13.377L1.167 7l3.037.758c.592.148.889.223 1.13.377.213.136.394.317.53.53.155.242.229.538.377 1.13l.76 3.037.759-3.036c.148-.593.222-.89.376-1.13a1.75 1.75 0 0 1 .53-.531c.242-.154.538-.229 1.13-.377L12.835 7l-3.037-.76c-.593-.147-.889-.221-1.13-.376a1.75 1.75 0 0 1-.531-.53c-.154-.242-.228-.538-.376-1.13z"
                  />
                </svg>
                New and Noteworthy
              </p>

              <div className="w-auto border-b border-neutral-200 my-3 mx-2"></div>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Web Design
              </p>
              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Animation
              </p>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Branding
              </p>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Illustration
              </p>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Mobile
              </p>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Typography
              </p>

              <p className="custom-font p-3 cursor-pointer hover:text-black/60 rounded-lg">
                Print
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => talentOpenHandler(true)}
          onMouseLeave={() => talentOpenHandler(false)}
        >
          <p className="cursor-pointer font-semibold hover:text-black/60">
            Find Talent
          </p>
          <div
            className={
              talentOpen ? "absolute block top-0 py-4 -left-5" : "hidden"
            }
          >
            <div className="bg-white p-3 rounded-lg my-5 top-4 custom-shadow w-[250px]">
              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.5 22v-5m0-10V2M2 4.5h5m-5 15h5M13 3l-1.734 4.509c-.282.733-.423 1.1-.643 1.408a3 3 0 0 1-.706.707c-.308.219-.675.36-1.408.642L4 12l4.509 1.734c.733.282 1.1.423 1.408.643.273.194.512.433.707.706.219.308.36.675.642 1.408L13 21l1.734-4.509c.282-.733.423-1.1.643-1.408.194-.273.433-.512.706-.707.308-.219.675-.36 1.408-.642L22 12l-4.509-1.734c-.733-.282-1.1-.423-1.408-.642a3 3 0 0 1-.706-.707c-.22-.308-.36-.675-.643-1.408z"
                  />
                </svg>
                Get Matches Now
              </p>
              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex items-center gap-3 font-semibold">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="aa-SubmitIcon"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.041 15.856a1 1 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.97 6.97 0 0 1-1.959 4.856m5.666 4.437-3.675-3.675A8.97 8.97 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.97 8.97 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414" />
                </svg>
                Browse Profile
              </p>

              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex items-center gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 8h.01M2 5.2v4.475c0 .489 0 .733.055.963.05.204.13.4.24.579.123.201.296.374.642.72l7.669 7.669c1.188 1.188 1.782 1.782 2.467 2.004a3 3 0 0 0 1.854 0c.685-.222 1.28-.816 2.467-2.004l2.212-2.212c1.188-1.188 1.782-1.782 2.004-2.467a3 3 0 0 0 0-1.854c-.222-.685-.816-1.28-2.004-2.467l-7.669-7.669c-.346-.346-.519-.519-.72-.642a2 2 0 0 0-.578-.24C10.409 2 10.164 2 9.675 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  />
                </svg>
                Purchase Services
              </p>

              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex items-center gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M14 17H8m8-4H8m12-3.012V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446"
                  />
                </svg>
                Post a Full-Time Time
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => hiredOpenHandler(true)}
          onMouseLeave={() => hiredOpenHandler(false)}
        >
          <p className="cursor-pointer font-semibold hover:text-black/60">
            Get Hired
          </p>
          <div
            className={
              hiredOpen ? "absolute block top-0 py-4 -left-5" : "hidden"
            }
          >
            <div className="bg-white p-3 rounded-lg my-5 top-4 custom-shadow w-60">
              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m12 15-3-3m3 3a22.4 22.4 0 0 0 4-2m-4 2v5s3.03-.55 4-2c1.08-1.62 0-5 0-5m-7-1a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11m-7-1H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m-6.5 8.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"
                  />
                </svg>
                Update to Pro
              </p>

              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M14 17H8m8-4H8m12-3.012V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446"
                  />
                </svg>
                Advertise
              </p>

              <p className="p-3 cursor-pointer hover:text-black/60 rounded-lg flex gap-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  aria-hidden="true"
                  class="icon"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.667"
                    d="M13.333 5.833c0-.775 0-1.162-.085-1.48a2.5 2.5 0 0 0-1.767-1.768C11.161 2.5 10.775 2.5 10 2.5c-.776 0-1.163 0-1.481.085a2.5 2.5 0 0 0-1.768 1.768c-.085.318-.085.705-.085 1.48M4.333 17.5h11.334c.933 0 1.4 0 1.756-.182.314-.16.569-.414.729-.728.181-.357.181-.823.181-1.757V8.5c0-.933 0-1.4-.181-1.757a1.67 1.67 0 0 0-.729-.728c-.356-.182-.823-.182-1.756-.182H4.333c-.933 0-1.4 0-1.756.182-.314.16-.569.415-.729.728-.181.357-.181.824-.181 1.757v6.333c0 .934 0 1.4.181 1.757.16.314.415.569.729.728.356.182.823.182 1.756.182"
                  />
                </svg>
                Full-Time Jobs
              </p>
            </div>
          </div>
        </div>

        <div className="cursor-pointer font-semibold hover:text-black/60">
          <p>Blogs</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
