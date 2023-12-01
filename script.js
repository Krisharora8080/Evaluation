import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import org.json.JSONObject;

@WebServlet("/BMIServlet")
public class BMIServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject jsonResponse = new JSONObject();

        String name = request.getParameter("name");
        double weight = Double.parseDouble(request.getParameter("weight"));
        double height = Double.parseDouble(request.getParameter("height"));

        // Calculate BMI
        double bmi = weight / (height * height);

        // Determine BMI category
        String category;
        if (bmi < 18.5) {
            category = "Underweight - Exercise and Eat more";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Healthy Weight - maintain";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight - Exercise and eat less";
        } else {
            category = "Obesity - It's okay";
        }

        jsonResponse.put("bmi", bmi);
        jsonResponse.put("category", category);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(jsonResponse.toString());
    }
}
