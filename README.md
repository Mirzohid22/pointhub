## PointHub 

Pointhubs provides a seamless sports experience with real-time data, focusing specifically on top football leagues. After setting up your environment variables and starting the app, you can explore various features related to the most prestigious football leagues.

Enjoy using Pointhubs and stay updated with the latest football league information!

If you encounter any issues, feel free to open an [issue](https://github.com/Mirzohid22/pointhub/issues) on GitHub.

Happy sports tracking! ⚽️🏆
## Installation 

To get started with PointHub, follow these steps:

#### 1. Create an Account on [Allsportsapi](https://allsportsapi.com/)
PointHub relies on the AllSportsAPI to fetch sports data. To use the app, you need to create an account on AllSportsAPI and obtain an API key.
Visit [AllSportsAPI Admin](https://allsportsapi.com/admin) to register and get your API key.

#### 2. Set Up Environment Variables
Create an .env.local file in the root directory of the project. Add the following environment variables:
```dotenv
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_API_URL=https://apiv2.allsportsapi.com/football/
```
Replace your_api_key_here with the API key you obtained from AllSportsAPI.

#### 3. Install Dependencies
Open your terminal, navigate to the project directory, and run:
```bash
yarn 
```

#### 4. Run the App
Once the dependencies are installed, you can start the app with:
```bash
yarn dev
```
Visit [localhost](http://localhost:3000) in your browser to see PointHub in action!
## Contribution

We welcome contributions from the community! If you'd like to contribute to Pointhub, please follow these guidelines:
#### 1. Fork the repository.
#### 2. Clone your fork locally:
```bash
git clone https://github.com/your-username/pointhub.git
```
#### 3. Create a new branch for your feature or bug fix:
```bash
git checkout -b feature-name
```
#### 4. Make your changes and commit them:
```bash
git add .
git commit -m "Add your commit message here"
```
#### 5. Push your changes to your fork:
```bash
git push origin feature-name
```
#### 6. Open a pull request on the main repository.
We appreciate your contributions to make PointHub even better!
## API
you can read the documentation [here](https://allsportsapi.com/soccer-football-api-documentation)
