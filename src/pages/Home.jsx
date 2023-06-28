import { Helmet } from "react-helmet";

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

const Home = () => {
    return (
        <div style={styles.container}>
            <Helmet>
                <title>Your Phonebook</title>
            </Helmet>
            <h1 style={styles.title}>
                Your awesome Phonebook
            </h1>
        </div>
    )
};

export default Home;