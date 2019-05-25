<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/TR/WD-xsl">
<xsl:template match="/">
<table border="1" >
  <tr bgcolor="#C1FFC1">
    <td align="center"><strong><xsl:value-of select="//carsCaptionMarka"/> </strong></td>
    <td align="center"><strong><xsl:value-of select="//carsCaptionNumber"/> </strong></td>
    <td align="center"><strong><xsl:value-of select="//carsCaptionColor"/> </strong></td>
  </tr>
  <xsl:for-each select="tutorial/avto/cars/car">
  <tr bgcolor="#11dd33">
    <td><xsl:value-of select="carMarka"/></td>
    <td align="right"><xsl:value-of select="carNumber"/> <xsl:value-of select="carNumber/@caption"/></td>
    <td><xsl:value-of select="carColor"/></td>
  </tr>
  </xsl:for-each>
</table>
</xsl:template>
</xsl:stylesheet>
