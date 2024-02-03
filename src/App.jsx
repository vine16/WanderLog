import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
// 3 steps for URL params
//1. create a new route
//2. link to that route
//3. read the state from URL
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import ProtectedRouter from "./pages/ProtectedRouter.jsx";
//index = default route, if not specified
//nested route > when the route effect the component rendered on the page
//diff routes => diff components
function App() {
  // The index attribute indicates the default route that should be displayed when the path is empty.
  // nested route => rendering different components based on the nested paths.
  // 1. Behavior without replace:

  // When a user navigates to the index route, the Navigate component creates a new history entry for the "cities" route.
  // This means there are now two entries in the browser's history: one for the initial page and one for "cities."
  // However, since the index route directly renders "cities" without any content of its own, going back would essentially take the user to an empty page.
  // To prevent this confusing experience, the back button is often disabled in this case.
  // 2. Using replace to enable back button:

  // The replace prop instructs the Navigate component to replace the current history entry with the new one, instead of adding a new entry.
  // This means the browser's history only contains one entry: the "cities" route.
  // Now, when the user clicks back, there's a valid previous entry to go back to, which is usually the state before the user entered the index route.

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRouter>
                  <AppLayout />
                </ProtectedRouter>
              }
            >
              {/* on hitting index route redirect to cities route */}
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
