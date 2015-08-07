﻿using SistemaAcademico.Business.WebApi.Models;
using SistemaAcademico.Business.WebApi.Models.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SistemaAcademico.Business.WebApi.Controllers
{
    [RoutePrefix("api/students")]
    [Authorize]
    public class StudentsController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IEnumerable<object> Get()
        {
            IEnumerable<object> students = new List<object>();
            using (var db = new ApplicationDbContext())
            {
                students = db.Students.OrderBy(x => x.UserName).Select(x => new { UserName = x.UserName, Id = x.Id }).ToList();
            }
            return students;
        }

        [HttpGet]
        [Route("info")]
        [AllowAnonymous]
        public IHttpActionResult GetInfo(string userName)
        {
            using (var db = new ApplicationDbContext())
            {
                var student = db.Students
                                .Where(x => x.UserName == userName)
                                .Select(x => new { UserName = userName, Email = x.Email})
                                .FirstOrDefault();
                if (student != null)
                    return Ok(student);
            }
            return NotFound();
        }
    }
}
