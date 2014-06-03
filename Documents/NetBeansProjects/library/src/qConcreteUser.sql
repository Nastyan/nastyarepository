/**
 *
 * @author nastyalobanova
 * @name qConcreteUser
 * @public
 */ 
Select * 
From qReader q
 Where :UserID = q.READERCODE
 and :readerID = q.LASTNAME