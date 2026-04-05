import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <Link to="/" className="text-primary hover:underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
