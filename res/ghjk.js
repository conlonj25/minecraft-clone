//head + header
request.getRequestDispatcher("HeadServlet").include(request, response);
request.getRequestDispatcher("HeaderServlet").include(request, response);

//outer container
out.println("<div id=outer-container>");

//navbar
out.println("<div id=navbar>");
request.getRequestDispatcher("NavbarServlet").include(request, response);
out.println("</div>");

//content
out.println("<div id=content>");
request.getRequestDispatcher("stocks.jsp").include(request, response);
out.println("</div>");

out.println("</div>");

out.close();