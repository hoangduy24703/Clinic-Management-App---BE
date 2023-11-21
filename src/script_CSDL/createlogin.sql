exec sp_addlogin 'ADMIN' ,'123456', 'QLPK'
GO
EXEC sp_addsrvrolemember 'ADMIN','sysadmin'
go