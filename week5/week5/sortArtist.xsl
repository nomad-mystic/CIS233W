<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>CD CATALOG</title>
                <script src="../bower_components/jquery/dist/jquery.min.js" type="text/javascript"></script>
                <script src="../bower_components/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
                <script src="sortFunctions.js" type="text/javascript"></script>
                <link rel="stylesheet" type="text/css" href="../bower_components/bootstrap/dist/css/bootstrap.css"/>
                <link rel="stylesheet" type="text/css" href="../bower_components/jquery-ui/themes/base/jquery-ui.min.css"/>
                <link rel="stylesheet" type="text/css" href="sortStyles.css"/>
            </head>
            <body>
                <section class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 col-lg-10 table-responsive">
                            <div class="ui-widget-content">
                                <table class="table table-striped table-bordered table-condensed draggable">
                                    <tr>
                                        <td class="metaRow">Artist</td>
                                        <td class="metaRow">Title</td>
                                        <td class="metaRow">Country</td>
                                        <td class="metaRow">Company</td>
                                        <td class="metaRow">Price</td>
                                        <td class="metaRow">Year</td>
                                        <td class="metaRow">Rating</td>
                                    </tr>
                                    <tbody>
                                        <xsl:for-each select="CATALOG/CD">
                                            <xsl:sort select="ARTIST" id="sort"/>
                                            <tr>
                                                <td><xsl:value-of select="ARTIST"/></td>
                                                <td><xsl:value-of select="TITLE"/></td>
                                                <td><xsl:value-of select="COUNTRY"/></td>
                                                <td><xsl:value-of select="COMPANY"/></td>
                                                <td><xsl:value-of select="PRICE"/></td>
                                                <td><xsl:value-of select="YEAR"/></td>
                                                <td><xsl:value-of select="RATING"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-2 col-lg-offset-0 col-md-offset-1 col-sm-offset-1 " style="background: #999; height: 100%;">
                            <div class="center-block">
                                <h1 class="text-center">Sort by</h1>
                                <input class="btn btn-info" type="submit" value="Artist" id="artist"/>
                                <input class="btn btn-info" type="submit" value="Title" id="title"/>
                                <input class="btn btn-info" type="submit" value="Country" id="country"/>
                                <input class="btn btn-info" type="submit" value="Company" id="company"/>
                                <input class="btn btn-info" type="submit" value="Price" id="price"/>
                                <input class="btn btn-info" type="submit" value="Year" id="year"/>
                                <input class="btn btn-info" type="submit" value="Rating" id="rating"/>
                                <input class="btn btn-info" type="submit" value="Assignment" id="assignment"/>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>