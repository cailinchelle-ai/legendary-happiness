package org.example;

import com.microsoft.playwright.*;
import org.junit.jupiter.api.*;
import java.util.regex.Pattern;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

public class PlaywrightTests {
    static Playwright playwright;
    static Browser browser;

    @BeforeAll
    static void setup() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(
                new BrowserType.LaunchOptions().setHeadless(false)
        );
    }
    @Test
    void titleContainsPlaywright() {
        Page page = browser.newPage();
        page.navigate("http://127.0.0.1:5500/OLCactivities.html");
        assertThat(page).hasTitle(Pattern.compile("Hang Ten"));
        page.waitForTimeout(3000);

        browser.close();
    }

    @Test
    void titleNotContainsPlaywright() {
        Page page = browser.newPage();
        page.navigate("http://127.0.0.1:5500/OLCactivities.html");
        assertThat(page).hasTitle(Pattern.compile("Hang Then"));
        page.waitForTimeout(3000);

        browser.close();
    }
    void anotherHomePage() {
        Page coffeeShop = browser.newPage();
        coffeeShop.navigate("http://127.0.0.1:5500/index.html");
    }

    void activities() {
        Page activities = browser.newPage();
        
    }

    void contactUsTitleContains() {
        Page contactUs = browser.newPage();
        contactUs.navigate("http://127.0.0.1:5501/contact.html");
        assertThat(contactUs).hasTitle(Pattern.compile("Contact Us"));
    }

    @AfterAll
    static void teardown() {
        browser.close();
        playwright.close();
    }
} 