package test.volia.cart;

/**
 *
 * @author frickua
 */
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class CartController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String showCart() {
		return "basket";
	}

}
