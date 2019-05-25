<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<table border="1">
  <tr bgcolor="#CCCCCC">
    <td align="center"><strong><a href="#" onClick="orderByMarka();">
                               <xsl:value-of select="//carsCaptionMarka"/>
                               </a></strong>
    </td>
    <td align="center"><strong><a href="#" onClick="orderByNumber();">
                               <xsl:value-of select="//carsCaptionNumber"/>
                               </a></strong>
    </td>
    <td align="center"><strong><a href="#" onClick="orderByColor();">
                               <xsl:value-of select="//carsCaptionColor"/>
                               </a></strong>
    </td>
 </tr>
  <xsl:for-each select="tutorial/avto/cars/car">
  <xsl:sort order="ascending" select="carMarka"/>
  <tr bgcolor="#F5F5F5">
    <td><xsl:value-of select="carMarka"/></td>
    <td align="right"><xsl:value-of select="carNumber"/> <xsl:value-of select="carNumber/@caption"/></td>
    <td><xsl:value-of select="carColor"/></td>
  </tr>
  </xsl:for-each>
</table>
</xsl:template>
</xsl:stylesheet>
