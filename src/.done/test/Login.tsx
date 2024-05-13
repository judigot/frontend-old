import React from "react";

interface Props {
  isPasswordCorrect?: boolean;
}

function Admin(): JSX.Element {
  return (
    <div data-testid="admin-container">
      <span>Hello, Admin</span>
    </div>
  );
}

function Home(): JSX.Element {
  return (
    <div data-testid="home-container">Do you have an account? Log in!</div>
  );
}

export default function Login({ isPasswordCorrect }: Props): JSX.Element {
  const [isAuth, setIsAuth] = React.useState<boolean>(
    isPasswordCorrect ?? false
  );
  return (
    <div style={{ width: "min-content" }}>
      <section className="layer-desk">
        {isAuth && <Admin />}
        {!isAuth && <Home />}
        <button
          type="button"
          onClick={() => {
            setIsAuth(!isAuth);
          }}
        >
          {isAuth && <>Log Out</>}
          {!isAuth && <>Log In</>}
        </button>
      </section>
    </div>
  );
}
